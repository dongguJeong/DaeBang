import styled from 'styled-components';
import CategoryBar from './CategoryBar';
import { Outlet } from 'react-router';
import Map from './Map';
import Sidebar from './Sidebar';

const Layout = () => {
    return (
        <StyledLayout>
            <CategoryBar />
            <main className="sidebar-layout">
                <Sidebar>
                    <Outlet />
                </Sidebar>
                <Map />
            </main>
        </StyledLayout>
    );
};

const StyledLayout = styled.div`
    display: flex;
    height: 100%;

    .sidebar-layout {
        flex: 1 1;
    }
`;

export default Layout;
