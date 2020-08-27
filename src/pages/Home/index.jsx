import React, { useState } from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, Map, CarrouselTitle } from './styles';

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        // onTrailingIconSelect={() => this.setState({ value: ''})}
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />    
                    </TextField>
                    <CarrouselTitle>Na sua Área</CarrouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                        <Card photo={restaurante} title="nome restaurante"/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wrapper>
    );
};

export default Home;