import {useForm} from "react-hook-form"

function Form(){

    const { register, handleSubmit} = useForm();

    function submitform(data){
        console.log(data);

    }

    console.log("i am again render");

    return (
        <>
        <form onSubmit={handleSubmit(submitform)}>
        <div>
            <label htmlFor="first">Name: </label>
                <input id="first" {...register('name')} />
        </div>
        <div>
            <label htmlFor="second">Age: </label>
                <input id="second" {...register('age')} />
        </div>
        <div>
            <label htmlFor="pass">Password: </label>
                <input id="pass" {...register('password')} />
        </div>
        <button>Submit</button>

        </form>
        </>
    )

}


export default Form;