import Header from "./Header";
import Footer from './Footer'

let App = ()=>{
    return(
        <>
            <Header />
            <div className="container my-4" style={{minHeight : "700px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Home Page</h2>
                    </div>
                </div>
            </div>     
            <Footer />       
        </>
    )
}
export default App;

/*
    div{
        background-color : red;

    }

*/