import {useForm} from "react-hook-form"

function Form(){

    const { register, handleSubmit ,formState : {errors }} = useForm();

    function submitform(data){
        console.log(data);

    }

    console.log("i am again render");

    return (
        <>
        <form onSubmit={handleSubmit(submitform)}>
        <div>
            <label htmlFor="first">Name: </label>
                <input id="first" {...register('name',
                    {required: "Name can't be empty!!"}
                )} />
                {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age: </label>
                <input id="second" {...register('age',
                    {
                        min: {
                            value:18,
                            message: "Minimum age to submit is 18"
                        },
                        max : {
                            value:88,
                            message: "Max age to submit is 88"
                        }
                    }
                )} />
                {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="pass">Password: </label>
                <input id="pass" type="password" {...register('password',
                    {
                        minLength: {
                            value:5,
                            message: "Minimum length to submit is 18"
                        },
                        maxLength : {
                            value:88,
                            message: "Max length to submit is 88"
                        }
                    }
                )} />

                {errors.pass && <span>{errors.pass.message}</span>}
        </div>
        <button>Submit</button>

        </form>
        </>
    )

}


export default Form;