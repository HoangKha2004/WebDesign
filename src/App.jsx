import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/Route';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component;
                    let Layout = DefaultLayout;

                    if (route.layout) Layout = route.layout;
                    else if (route.layout === null) Layout = Fragment;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
