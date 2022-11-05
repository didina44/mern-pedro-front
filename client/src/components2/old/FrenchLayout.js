import { Outlet } from 'react-router-dom'
import FrenchHeader from './FrenchHeader'
import FrenchFooter from './FrenchFooter'

const FrenchLayout = () => {
    return (
        <>
            <FrenchHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <FrenchFooter />
        </>
    )
}
export default FrenchLayout