import { useState } from "react";
import {
  SimpleGrid,
  Box,
  Center,
  Container,
  useMediaQuery,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Nav from "@/components/UI/Navbar/Mobile_NavBar/Index";
import FloatingButtons from "@/components/UI/Buttons/Index";
import NavigationBar from "@/components/UI/Navbar/Desktop_NavBar/Index";
import Fuse from "fuse.js";
import { useQuery } from "@apollo/react-hooks";
import { GET_WALK_SCHEDULES, Schedule } from "utilis/https";
import CustomSpinner from "../../Spinner";
import WalkScheduleCard from "../../Cards";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../../../UI/Navbar/SideBar/Sidebar";
import {
  showCompletedState,
  updateScheduleModal,
  scheduleData,
} from "@/store/atoms";
import { useRecoilState } from "recoil";
import { useUser } from "@clerk/nextjs";
import ScrollToTopButton from "@/components/UI/Buttons/ScrollToTopButton";
import NoSchedules from "../Schedule_404";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { JCTab } from "@/components/Tabs";
import { DateClickArg } from "@fullcalendar/interaction";

const Schedules = () => {
  const [query, updateQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Calendar");
  const [showCompleted] = useRecoilState(showCompletedState);
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [, setIsUpdateModalOpen] = useRecoilState(updateScheduleModal);
  const [, setScheduleDataState] = useRecoilState(scheduleData);

  const bgGradient = useColorModeValue(
    "linear(to-b, white, yellow)",
    "linear(to-b, #8f8e8e, #4e4e4e.900)"
  );
  const borderColor = useColorModeValue(
    "2px solid #1f1f1a",
    "1px solid #5f5f5e"
  );

  const { data, loading } = useQuery<{ schedules: Schedule[] }>(
    GET_WALK_SCHEDULES,
    {
      fetchPolicy: "network-only",
      pollInterval: 500,
      variables: { email: userEmail },
    }
  );

  if (loading) {
    return <CustomSpinner text={"Loading ..."} />;
  }

  const fuse = new Fuse(data?.schedules || [], {
    keys: ["person", "dog", "date"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const filteredSchedules = query
    ? results.map((result) => result.item)
    : data?.schedules || [];

  const filteredTask = showCompleted
    ? filteredSchedules.filter((schedule) => schedule.isCompleted)
    : filteredSchedules;

  const calendarEvents = (data?.schedules || []).map((schedule) => ({
    id: schedule.id,
    title: `${schedule.person} walking ${schedule.dog}`,
    start: schedule.date,
    allDay: true,
  }));

  const handleDateClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
    setScheduleDataState({
      id: "",
      person: "",
      dog: "",
      date: arg.dateStr,
      time: "",
      isCompleted: false,
      email: userEmail || "",
    });
    setIsUpdateModalOpen(true);
  };

  const CalendarView = (
    <Box mt={4} mx={{ base: 2, md: 4 }} className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={isMobile ? "dayGridMonth" : "dayGridMonth"}
        events={calendarEvents}
        height="auto"
        headerToolbar={{
          left: isMobile ? "prev,next" : "prev,next",
          center: "title",
          right: isMobile ? "" : "dayGridMonth,dayGridWeek",
        }}
        views={{
          dayGridMonth: {
            titleFormat: { month: "long", year: "numeric" },
            dayHeaderFormat: { weekday: isMobile ? "narrow" : "short" },
          },
        }}
        contentHeight="auto"
        aspectRatio={isMobile ? 0.8 : 1.35}
        expandRows={true}
        handleWindowResize={true}
        stickyHeaderDates={true}
        dayMaxEvents={isMobile ? 2 : 3}
        moreLinkClick="popover"
        eventDisplay={isMobile ? "list-item" : "auto"}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short",
        }}
        dateClick={handleDateClick}
        selectable={true}
      />

      {/* Add Schedule Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Schedule for {selectedDate}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* You can add your schedule form here */}
            <Text>Selected Date: {selectedDate}</Text>
            {/* Add your form components here */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add Schedule</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  const CardsView = (
    <Center px={{ base: 2, md: 4 }}>
      <Box width="100%" maxW="800px">
        <Text
          fontWeight="bold"
          mb={5}
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
        >
          {showCompleted ? "Show All" : "Completed Schedules"}
        </Text>
        <ScrollToTopButton />
        <SimpleGrid
          columns={1}
          spacing={6}
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          {filteredTask.length > 0 ? (
            filteredTask.map((schedule: Schedule) => (
              <Box key={schedule.id} maxW="600px" mx="auto">
                <WalkScheduleCard walkSchedules={schedule} />
              </Box>
            ))
          ) : (
            <NoSchedules query={query} />
          )}
        </SimpleGrid>
      </Box>
    </Center>
  );

  const tabs = [
    { name: "Calendar", view: CalendarView },
    { name: "Cards", view: CardsView },
  ];

  return (
    <>
      {!isMobile && <Nav />}
      <Container
        maxW="100%"
        minH="100vh"
        px={{ base: 2, md: 4, lg: 6 }}
        pb={{ base: 20, md: 10 }}
        bgGradient={bgGradient}
      >
        <FloatingButtons />

        {/* Search Bar */}
        <Flex
          pos="fixed"
          zIndex={1}
          justifyContent="center"
          width="100%"
          left={0}
          top={{ base: 2, md: 4 }}
          px={4}
        >
          <InputGroup width={{ base: "170px", sm: "170px", md: "400px" }}>
            <Input
              type="text"
              placeholder="Search schedules..."
              id="query"
              boxShadow="md"
              value={query}
              onChange={(e) => updateQuery(e.currentTarget.value)}
              border={borderColor}
              _placeholder={{ color: "gray" }}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("white", "gray.800")}
            />
            <InputLeftElement pointerEvents="none" color="gray.500">
              <FaSearch />
            </InputLeftElement>
          </InputGroup>
        </Flex>

        <Sidebar />
        <Flex justifyContent="flex-end" pr={{ base: 4, md: 12, lg: 16 }}>
          <Box width={{ base: "100%", md: "90%", lg: "84%" }} p={4}>
            <JCTab
              tabs={tabs}
              activeTab={selectedTab}
              onTabChange={setSelectedTab}
            />
          </Box>
        </Flex>

        {isMobile && <NavigationBar />}
      </Container>
    </>
  );
};

export default Schedules;
