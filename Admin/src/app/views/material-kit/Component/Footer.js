import { Box, Stack, styled } from '@mui/material';
import { SimpleCard } from 'app/components';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import FooterTable from './table/FooterTable';
import FooterTrash from './Trash/FooterTrash';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const Footer = () => {
  return (
    <Container>
      <Stack spacing={3} className="container mt-0">
        <title>Digi2l - Ordering footer menu items</title>
        <div class="card-header mt-4">
          <div class="row align-items-center">
            <div class="col">
              <h2 class="fs-5 mb-0 card-title">Ordering footer menu items</h2>
            </div>
          </div>
        </div>
        <Box>
          <div className="">
            <Tabs className="text-start m-3  ">
              <TabList>
                <Tab>Published</Tab>
                <Tab>Trashed</Tab>
              </TabList>

              <TabPanel>
                <SimpleCard>
                  <FooterTable />
                </SimpleCard>
              </TabPanel>

              <TabPanel>
                <SimpleCard>
                  <FooterTrash />
                </SimpleCard>
              </TabPanel>
            </Tabs>
          </div>
        </Box>
      </Stack>
    </Container>
  );
};

export default Footer;
