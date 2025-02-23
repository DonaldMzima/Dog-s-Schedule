import React, { FC, ReactNode, useEffect, useMemo } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

/**
 * JCTab Component
 *
 * A reusable component that generates a tab interface dynamically based on provided entries.
 *
 * @param {Array<TabEntry>} tabs - An array of objects containing the tab name and its corresponding page view.
 *
 * @example
 * const tabEntries = [
 *   { name: 'Account', view: <AccountPage /> },
 *   { name: 'Password', view: <PasswordPage /> },
 *   { name: 'Settings', view: <SettingsPage /> },
 * ];
 *
 * <JCTab tabs={tabEntries} />
 */

export type TabEntry = {
  name: string;
  view: ReactNode;
};

export type TabsDemoProps = {
  tabs: Array<TabEntry>;
};

interface JCTabProps {
  tabs: { name: string; view: ReactNode }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const JCTab: React.FC<JCTabProps> = ({
  tabs,
  activeTab: selectedTab,
  onTabChange,
}) => {
  const router = useRouter();
  const bgColor = useColorModeValue("white", "gray.800");
  const selectedBg = "black";
  const selectedColor = useColorModeValue("white", "white");

  const borderColor = useColorModeValue("gray.200", "gray.600");

  const activeTab = useMemo(() => {
    const tabQuery = router.query.tab as string;
    return (
      tabs.find((tab) => tabQuery === tab.name.toLowerCase())?.name ||
      tabs[0]?.name
    );
  }, [router.query.tab, tabs]);

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.name === activeTab);
    if (currentTab && router.query.tab !== currentTab.name.toLowerCase()) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, tab: currentTab.name.toLowerCase() },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [activeTab, tabs, router]);

  const handleTabChange = (index: number) => {
    const selectedTab = tabs[index];
    onTabChange(selectedTab.name);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab: selectedTab.name.toLowerCase() },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box w="full" h="full" borderRadius="md" boxShadow="md">
      <Tabs
        variant="enclosed"
        index={tabs.findIndex((tab) => tab.name === activeTab)}
        onChange={handleTabChange}
        isFitted
        size={{ base: "sm", md: "md" }}
      >
        <TabList
          borderBottomWidth="1px"
          borderColor={borderColor}
          overflowX="auto"
          overflowY="hidden"
          whiteSpace="nowrap"
          css={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              fontSize={{ base: "sm", md: "md" }}
              py={{ base: 3, md: 4 }}
              px={{ base: 4, md: 5 }}
              borderRadius="md"
              borderWidth="1px"
              borderColor={activeTab === tab.name ? selectedBg : borderColor}
              bg={activeTab === tab.name ? selectedBg : "transparent"}
              color={activeTab === tab.name ? selectedColor : "gray.600"}
              _selected={{
                bg: selectedBg,
                color: selectedColor,
                fontWeight: "bold",
                borderBottom: "2px solid",
                borderColor: "purple.600",
              }}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              bg={
                tab.name === "Cards" && activeTab === "Cards"
                  ? "transparent"
                  : bgColor
              }
              p={{ base: 4, md: 6 }}
              roundedBottom="md"
              borderWidth="1px"
              borderTop="none"
              borderColor={borderColor}
            >
              {tab.view}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};
