import { useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import styles from './Formulario.module.css';
import Button from '../Button/Button';

type FormValues = {
  placa: string;
  marca: string;
  modelo: string;
  kilometragem: number;
  ano: number;
  descricao: string,
  manutencao: string
};

const messageErr = 'Esse campo é obrigatório*';

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.placa ? values : {},
    errors: !values.placa 
    ? {
      placa: {
        type: 'required', 
        message: messageErr,
      },
    } 
    : {},
  };
};

export const Formulario = () => {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState<FormValues>({
    placa: '',
    marca: '',
    modelo: '',
    kilometragem: 0,
    ano: 0,
    descricao: '',
    manutencao: ''
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => {
    setFormData({ ...formData, ...data });
    if (step < 2) setStep(step + 1); 
    else {
      setFormData({ ...formData, ...data });
      alert('Final Form Data: ' + formData);
      
    }
  });

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.forms1}>
            <div>
              <label htmlFor="placa">Placa</label>
              <input {...register('placa')} placeholder="Digite aqui sua placa" />
              <span className={styles.err}>{errors?.placa && errors.placa.message}</span>
            </div>
            <div>
              <label htmlFor="marca">Marca</label>
              <input {...register('marca')} placeholder="Digite aqui a marca do veículo" />
              <span className={styles.err}>{errors?.marca && errors.marca.message}</span>
            </div>
            <div>
              <label htmlFor="modelo">Modelo</label>
              <input {...register('modelo')} placeholder="Digite aqui o modelo do veículo" />
              <span className={styles.err}>{errors?.modelo && errors.modelo.message}</span>
            </div>
            <div>
              <label htmlFor="kilometragem">Kilometragem</label>
              <input {...register('kilometragem')} placeholder="Digite aqui a kilometragem" />
              <span className={styles.err}>{errors?.kilometragem && errors.kilometragem.message}</span>
            </div>
            <div>
              <label htmlFor="ano">Ano</label>
              <input {...register('ano')} placeholder="Digite aqui o ano"  />
              <span className={styles.err}>{errors?.ano && errors.ano.message}</span>
            </div>
            <div>
                <Button href='submit' text="Próximo" type="secondary" filled={true} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.forms2}>
            <div>
                <label htmlFor="descricao">Descrição</label>
                <textarea {...register('descricao')} placeholder='Descreva os problemas que seu veículo tem sofrido'></textarea>
            </div>
            <div>
                <label htmlFor="">Manutenções</label>
                <select {...register('manutencao')} >
                  <option defaultChecked value="" >Selecione</option>
                  <option value="alinhamento">Alinhamento</option>
                  <option value="arCondicionado">Ar condicionado</option>
                  <option value="arrefecimento">Arrefecimento</option>
                  <option value="balanceamentoEGeo">Balanceamento e Geometria</option>
                  <option value="correias">Correias</option>
                  <option value="discoPastilhaFreio">Discos e Pastilhas de Freio</option>
                  <option value="embreagens">Embreagens</option>
                  <option value="filtrosEVelas">Filtros e Velas de Ignição</option>
                  <option value="outro">Outro</option>

                </select>
            </div>
            <div>
                <Button href="submit" text="Gerar Orçamento" type="secondary" filled={true} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.formulario}>
      {renderStep()}
    </form>
  );
};