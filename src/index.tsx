import React from "react";
import Seller from './models/seller'
import { Container, Title, Btn, BtnText } from './styles';

const App: React.FC = () => {
  const seller = {
    group_id: 1,
    code: 123,
    company: 'José da Silva',
    name: 'Vendedor de Teste',
    uid: '1234567890',
    cpf_cnpj: '46846998039',
    rg_ie: '2578432174',
    active: true
  };

  const setSeller = async () => {
    try {
      console.log('drop', await Seller.dropTable())
      console.log('create', await Seller.createTable())
      console.log('insert', await Seller.insert(seller))
      const res = await Seller.all()
      console.log(res)
      const updateId: string = res.rows.item(0).id
      console.log(updateId)
      console.log('update', await Seller.update(seller, updateId))
      const res2 = await Seller.all()
      console.log('one', res2.rows.item(0))
      console.log('delete', await Seller.destroy(updateId))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Title>FBS</Title>
      <Btn onPress={setSeller}>
        <BtnText>Click Me</BtnText>
      </Btn>
    </Container>
  );
};

export default App;
