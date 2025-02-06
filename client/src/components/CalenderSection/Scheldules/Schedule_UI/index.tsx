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
import { showCompletedState } from "@/store/atoms";
import { useRecoilState } from "recoil";
import { useUser } from "@clerk/nextjs";
import ScrollToTopButton from "@/components/UI/Buttons/ScrollToTopButton";
import NoSchedules from "../Schedule_404";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { JCTab } from "@/components/Tabs";

const Schedules = () => {
  const [query, updateQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Calendar");
  const [showCompleted] = useRecoilState(showCompletedState);
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

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

  const CalendarView = (
    <Box mt={8}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        height="auto"
      />
    </Box>
  );

  const CardsView = (
    <Center>
      <Box>
        <Text fontWeight="bold" mb={5}>
          {showCompleted ? "Show All" : "Completed Schedules"}
        </Text>
        <ScrollToTopButton />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacing={8}>
          {filteredTask.length > 0 ? (
            filteredTask.map((schedule: Schedule) => (
              <WalkScheduleCard key={schedule.id} walkSchedules={schedule} />
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
        maxW={"100%"}
        minHeight="100vh"
        bottom={0}
        bgGradient={bgGradient}
      >
        <FloatingButtons />
        <Flex
          pos="fixed"
          zIndex={1}
          justifyContent="center"
          mt={{ base: -70, sm: -70, md: 150, lg: -225 }}
          ml={{
            base: "calc(50% - 85px)",
            sm: "calc(50% - 85px)",
            md: "calc(50% - 150px)",
            lg: "calc(50% - 285px)",
          }}
        >
          <InputGroup width={{ base: "170px", sm: "170px", md: "400px" }}>
            <Input
              type="text"
              placeholder="search"
              id="query"
              boxShadow="md"
              value={query}
              onChange={(e) => updateQuery(e.currentTarget.value)}
              width="100%"
              border={borderColor}
              _placeholder={{ color: "gray" }}
            />
            <InputLeftElement pointerEvents="none" color="black">
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
