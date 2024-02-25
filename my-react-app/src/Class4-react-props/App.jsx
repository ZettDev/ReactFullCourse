import Student from './Student.jsx';
import PropTypes from "prop-types";

function App() {
    return (
        <>
            <Student name="Spongebob" age={32} isStudent={true}/>
            <Student name="Patrick" age={29} isStudent={false}/>
            <Student name="Squidward" age={35} isStudent={false}/>
            <Student name="Mr. Krabs" age={53} isStudent={true}/>
            <Student/>
        </>
    );
}

export default App
