import {useForm, Resolver} from "react-hook-form"
import styles from "./Formulario.module.css"
import Button from "../Button/Button"

type FormValues = {
    placa: string,
    marca: string,
    modelo: string,
    kilometragem: number,
    ano: number,
    chassi: string
}

const messageErr = "Esse campo é obrigatório*"

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.placa ? values : {},
        errors: !values.placa 
        ? {
            placa: {
                type: "required",
                message: messageErr
            }
        } : {},
    }
}
export const Formulario = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>({ resolver })
      const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <form onSubmit={onSubmit} className={styles.formulario}>
            <div>
                <label htmlFor="">Placa</label>
                <input {...register("placa")} />
                {errors?.placa && <span className={styles.err}>{errors.placa.message}</span>}
            </div>
            <div>
                <label htmlFor="">Marca</label>
                <input {...register("marca")} />
            </div>
            <div>
                <label htmlFor="">Modelo</label>
                <input {...register("modelo")} />
            </div>
            <div>
                <label htmlFor="">Kilometragem</label>
                <input {...register("kilometragem")} />
            </div>
            <div>
                <label htmlFor="">Ano</label>
                <input {...register("ano")} />
            </div>
            <div>
                <label htmlFor="">Chassi</label>
                <input {...register("chassi")} />
            </div>
            <div>
                <Button href="submit" text="Próximo" type="secondary" filled={true}/>
            </div>
        </form>
    )
}
