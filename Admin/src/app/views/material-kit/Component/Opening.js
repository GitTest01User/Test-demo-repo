import { Box, Stack, styled } from '@mui/material';
import { SimpleCard } from 'app/components';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CurrentOpeningsTable from './table/OpeningsTable';
import CurrentOpeningsTrash from './Trash/OpeningTrash';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const CurrentOpenings = () => {
  return (
    <Container>
      <Stack spacing={3} className="container mt-0">
        <title>Digi2l - Openings</title>

        <Box>
          <div class="card-header mt-4">
            <div class="row align-items-center">
              <div class="col">
                <h2 class="fs-5 mb-0 card-title">Openings </h2>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Tabs>
              <TabList>
                <Tab>Published</Tab>
                <Tab>Trashed</Tab>
              </TabList>

              <TabPanel>
                <SimpleCard>
                  <CurrentOpeningsTable />
                </SimpleCard>
              </TabPanel>
              <TabPanel>
                <SimpleCard>
                  <CurrentOpeningsTrash />
                </SimpleCard>
              </TabPanel>
            </Tabs>
          </div>
        </Box>
      </Stack>
    </Container>
  );
};

export default CurrentOpenings;
