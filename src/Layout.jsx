import {Navbar} from "./components/Navbar";
import {Dashboard} from "./components/Dashboard";
import {Footer} from "./components/Footer";
import {HabitsMenu} from "./components/HabitsMenu";
import {Header} from "./components/Header";

export const Layout = () => {
    return (
        <>
            <div className="m-0 p-0 h-full">
                <div className="m-0 w-full h-full">
            <div className="border-solid border-2 border-purple-700 p-2  ">
            <Header/>
            </div>
            <div className="border-solid border-2 border-blue-700 p-2  ">
            <Navbar/>
            </div>
                <div className="flex flex-row h-screen">
            <div className="border-solid border-2 border-orange-800 p-3 w-2/3 break-all">
            <Dashboard/>
            </div>
            <div className="border-solid border-2 border-green-500 p-3 w-1/3 overflow-y-auto">
            <HabitsMenu/>
            </div>
                </div>
            <div className="border-solid border-t-4 border-neutral-content bg-neutral-content/80 w-full fixed bottom-0 left-0 right-0 flex h-10 place-items-center ">
            <Footer/>
            </div>
                </div>
            </div>

        </>
    )
}