import './QuizOption.css';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizOption = ({ quiz }) => {

    const { question, options } = quiz;

    const clickedByIcon = (quiz) => {
        const correctAns = quiz.correctAnswer;
        toast(`Correct Answeer: ${correctAns}`);
    }

    const addToClick = (option) => {
        const currectAns = quiz.correctAnswer;
        const clickedValue = option;
        if (currectAns === clickedValue) {
            toast("Wow! You clicked Right Answeer.");
        }
        else {
            toast("Oops! You clicked Wrong Answeer.");
        }
    }

    const paragraph = quiz.question;
    const replase = paragraph.replace(/(<([^>]+)>)/ig, '');

    return (
        <div className='options'>
            <div className='eye-icon'>
            <p className='question'>{replase}</p>
                <EyeIcon onClick={() => clickedByIcon(quiz)} className='h-6 w-6'></EyeIcon>
            </div>
            <div className='option'>
                {
                    options.map(option =>
                        <label className='single-option'><input onClick={() => addToClick(option)} type="radio" name={quiz.id} id="" />{option}</label>
                    )
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default QuizOption;