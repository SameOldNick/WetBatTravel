import AdminNavbar from "components/AdminNavbar";
import AdminSidebar from "components/AdminSidebar";
import React from "react";
import { Redirect, RouteComponentProps, Switch } from "react-router";
import { Route } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Dashboard from 'views/Dashboard';

interface IProps extends RouteComponentProps {

}

interface IState {

}

export default class Admin extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    public render() {

        return (
            <>
                <AdminNavbar />

                <Container fluid>
                    <Row>
                        <Col md={2} lg={1} className="pt-3">
                            <AdminSidebar {...this.props} />
                        </Col>
                        <Col md={10} lg={11} className="pt-3 px-md-4">
                            <Switch>
                                <Route path="/dashboard" component={Dashboard} exact />
                                {/* Catch all route */}
                                <Route>
                                    <Redirect to="/dashboard" />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}