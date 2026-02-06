import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import  { z } from 'zod';


const formSchema = z.object({
    name:z.string().min(3, "Min length should be 3").max(20, "Max length should be 20"),
    age: z.number().min(10, "Min age should be 10").max(20, "Max age should be 90"),
    pass: z.string().min(5).max(20)
})  //attach this zod code with useForm using form resolver

function ZodForm(){

    const { register, handleSubmit ,formState : {errors }} = useForm({
        resolver: zodResolver(formSchema)  //zod attached
    });

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
                {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="second">Age: </label>
                <input id="second" {...register('age')} />

                {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label htmlFor="pass">Password: </label>
                <input id="pass" type="password" {...register('password')} />

                {errors.pass && <span>{errors.pass.message}</span>}
        </div>
        <button>Submit</button>

        </form>
        </>
    )

}


export default ZodForm;