import React, { lazy, Suspense, Fragment } from 'react';
import { Router as BaseRouter, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '@/utils';

import { Layout } from '@/layouts';
import { NotFound } from '@/pages/NotFound';

const HomePage = lazy(() =>
  import(
    '@/pages/Home'
    /* webpackChunkName: 'HomePage' */
    /* webpackPrefetch: true */
  )
);

const routes = [
  {
    privateRoute: false,
    exact: true,
    path: '/',
    component: HomePage,
    layout: Layout
  }
];

export function Router() {
  return (
    <BaseRouter history={history}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {routes.map(({
            layout: Layout = Fragment,
            component: Component,
            privateRoute = true,
            ...rest
          }) => {
            return (
              <Route
                key={rest.path}
                {...rest}
              >
                {({ location }) => {
                  if (privateRoute) {
                    return (
                      <Redirect
                        to={{
                          pathname: '/signin',
                          state: { from: location }
                        }}
                      />
                    );
                  }

                  return (
                    <Layout>
                      <Component />
                    </Layout>
                  );
                }}
              </Route>
            );
          })}

          <Route
            path="*"
            component={NotFound}
          />
        </Switch>
      </Suspense>
    </BaseRouter>
  );
}