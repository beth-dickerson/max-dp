import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { HomePageCompanyLogo, HomePageStarredEntities, HomePageToolkit } from '@backstage/plugin-home';
import LogoFull from './LogoFull';
import {
  Page,
  InfoCard,
  Content
} from '@backstage/core-components';
import { HomePageSearchBar, SearchContextProvider } from '@backstage/plugin-search';
import LogoIcon from './LogoIcon';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
}));

const useLogoStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
  },
    svg: {
    width: 'auto',
    height: 100,
  },
  path: {
    fill: '#7df3e1',
  },
}));

// const labels = (
//   <>
//     <HeaderLabel label="Owner" value="players" />
//     <HeaderLabel label="Lifecycle" value="Production" />
//     <HeaderLabel label="Tier" value="Level 1" />
//   </>
// );


export const HomePage = () => {
  const classes = useStyles();
  const { container } = useLogoStyles();
  return (
    // <Page themeId="documentation">
    //  <Header title="Documentation" type="documentation">
    //     {labels}
    //   </Header>
    //   <Grid container spacing={3} alignItems="stretch">
    //     <Grid container item md={12}>
    //       <Grid item md={6}>
    //         <InfoCard title="Composable Section" variant="gridItem">
    //           {/* placeholder for content */}
    //           <div style={{ height: 210 }} />
    //         </InfoCard>
    //       </Grid>
    //       <Grid item md={6}>
    //         <InfoCard title="Composable Section" variant="gridItem">
    //           {/* placeholder for content */}
    //           <div style={{ height: 210 }} />
    //         </InfoCard>
    //             </Grid>
    //     </Grid>
    //   </Grid>
    // </Page>
    <SearchContextProvider>
      <Page themeId='home'>
        <Content>
          <Grid container justifyContent='center' spacing={6}>
            <HomePageCompanyLogo
              className={container}
              logo={<LogoFull/>}
            />
            <Grid container item xs={12} alignItems='center' direction='row'>
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder='Search'
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={Array(8).fill({
                    url: '#',
                    label: 'link',
                    icon: <LogoIcon />,
                  })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title='Composable Section'>
                  {/* placeholder for content */}
                  <div style={{ height: 210 }} />
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title='Composable Section'>
                  {/* placeholder for content */}
                  <div style={{ height: 210 }} />
                </InfoCard>
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  )
}