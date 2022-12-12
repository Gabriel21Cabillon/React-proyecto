import Navbar from "./Navbarr"


export const Layout = ({children}) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}