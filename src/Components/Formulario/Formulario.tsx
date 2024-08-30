export const Formulario = () => {
  return (
   <>
    <form action="#">
        <div>
            <label htmlFor="">Informe a placa do seu veículo</label>
            <input type="text" />
            <label htmlFor="">Marca</label>
            <input type="text" required/>
            <label htmlFor="">Modelo</label>
            <input type="text" required/>
            <label htmlFor="">Kilometragem</label>
            <input type="text" required/>
            <label htmlFor="">Ano</label>
            <input type="text" required/>
            <label htmlFor="">Chassi</label>
            <input type="text" />
        </div>
    </form>
   </>
  )
}
