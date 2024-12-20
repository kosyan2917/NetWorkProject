import "./contacts.css"
import Contact from "./contact/contact";


const Contacts = () => {
    return <div className={"contacts"} id={'contacts'}>
        <div className={"contacts-header"}>
            <h1> КОНТАКТЫ </h1>
            <div className={"news-dots-right"}>
                <div className={"news-line"}>
                </div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
                <div className={"news-dot"}></div>
                <div></div>
            </div>
        </div>
        <div className={"contacts-grid"}>
            <Contact name={"Info"} email={"info@montecegaming.com"}/>
            <Contact name={"Business"} email={"business@montecegaming.com"}/>
            <Contact name={"Investors"} email={"investors@montecegaming.com"}/>
            <Contact name={"Support"} email={"support@montecegaming.com"}/>
            <Contact name={"Hr"} email={"hr@montecegaming.com"}/>
            <svg
                className={"contacts-image"}
                width="600"
                height="600"
                viewBox="0 0 158.75 158.75"
                version="1.1"
                id="svg1"
                ><g
                id="layer1"><path
       d="m 40.634879,69.218219 v 47.938631 h -6.91699 -6.916999 v 7.01306 7.01307 h 15.082899 15.08289 V 108.7988 86.414641 h 5.764161 5.76417 V 100.3447 114.27477 H 78.77443 89.05386 V 100.3447 86.414641 h 5.76416 5.76417 v 22.384159 22.38418 h 15.08289 15.08289 v -7.01307 -7.01306 h -6.917 -6.91699 V 69.218219 21.279591 H 101.83109 86.7482 v 7.013069 7.01306 h 6.91699 6.917 v 15.3711 15.371107 H 94.81802 89.05386 V 52.11787 38.1878 H 78.77443 68.49501 V 52.11787 66.047927 H 62.73084 56.966679 V 50.67682 35.30572 h 6.917001 6.91699 V 28.29266 21.279591 H 55.717779 40.634879 Z M 68.49501,28.29266 v 4.7074 h -6.917 -6.916991 v 16.52393 16.523937 h -5.86024 -5.86023 V 44.81659 23.585257 h 12.77723 12.777231 z m 46.1133,16.52393 v 21.231337 h -5.86023 -5.86023 V 49.52399 33.00006 h -6.917 -6.91699 v -4.7074 -4.707403 h 12.77723 12.77722 z M 86.7482,53.2707 V 66.047927 H 78.77443 70.80067 V 53.2707 40.49347 h 7.97376 7.97377 z M 68.49501,71.716019 v 3.36243 H 55.717779 42.940549 v -3.36243 -3.36243 h 12.77723 12.777231 z m 18.25319,4.51526 v 7.877692 h -7.97377 -7.97376 v -7.877692 -7.87769 h 7.97376 7.97377 z m 27.86011,-4.51526 v 3.36243 H 101.83109 89.05386 v -3.36243 -3.36243 h 12.77723 12.77722 z m -46.1133,9.030522 v 3.36243 H 55.717779 42.940549 v -3.36243 -3.362422 h 12.77723 12.777231 z m 46.1133,0 v 3.36243 H 101.83109 89.05386 v -3.36243 -3.362422 h 12.77723 12.77722 z M 54.661019,107.64597 v 21.23135 H 41.883789 29.106555 v -4.70741 -4.70739 h 6.916994 6.917 V 102.93857 86.414641 h 5.86023 5.86024 z M 86.7482,99.191861 V 111.9691 H 78.77443 70.80067 V 99.191861 86.414641 h 7.97376 7.97377 z m 27.86011,3.746709 v 16.52395 h 6.917 6.91699 v 4.70739 4.70741 H 115.66508 102.88785 V 107.64597 86.414641 h 5.86023 5.86023 z"
       id="path1"
       style={{fill:"#219c21", fillOpacity:"1", stroke:"none", strokeWidth:0.019, strokeDasharray:"none"}}
      /></g></svg>
        </div>
    </div>
}

export default Contacts
