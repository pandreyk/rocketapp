import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const TabsComponent = ({albums, posts}) => {
  console.log()
  return (
    <Tabs>
      <TabList>
        <Tab>Albums</Tab>
        <Tab>Posts</Tab>
      </TabList>

      <TabPanel>
        {albums}
      </TabPanel>
      <TabPanel>
        {posts}
      </TabPanel>
    </Tabs>
  )
}

export default TabsComponent