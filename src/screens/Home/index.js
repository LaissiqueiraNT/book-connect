import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import MeuPesquisar from '../../components/MeuPesquisar';
import BookButton from '../../components/BookButton';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Home() {
    const navegation = useNavigation();
   
    return (

        <ScrollView>
            <SafeAreaView >

                <View style={styles.menu}>

                    <View style={styles.notf}>
                        <Feather style={{ marginLeft: 10 }} onPress={() => navegation.toggleDrawer()} name="menu" size={25} color="black" />

                        <Image style={styles.logo} resizeMode='center' source={require('../../../assets/BookConnect.png')} />

                        <Ionicons style={{ marginRight: 10 }} onPress={() => navegation.navigate('Notification')}
                            name="notifications-outline" size={30} color="black" />
                    </View>


                    {/* MenuPesquisar */}
                    <MeuPesquisar
                        placeholder="Pesquisar..."
                    />
                    {/* MenuPesquisar */}
                </View>



                {/* Titulo */}
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.titulo}>Com base nos seus gostos</Text>
                    <Octicons   name="filter" style={{ marginTop: 10, marginLeft: 70 }} size={25} color="black" />
                </View>
                {/* Titulo ///////////////// */}

                

                {/* Livros */}
                <View style={styles.align}>
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/1.jpg')}
                        text="Entendendo Algoritmos"
                        autor="Aditya Y. Bhargava"
                        price="$63,80"
                        bio="Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. Os algoritmos que você mais utilizará como um programador já foram descobertos, testados e provados. Se você quer entendê-los, mas se recusa a estudar páginas e mais páginas de provas, este é o livro certo."
                    />


                    <BookButton 
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/2.jpg')}
                        text="Estruturas de Dados"
                        autor="Loiane Groner"
                        price="$109,00"
                        bio="Uma estrutura de dados é uma maneira particular de organizar dados em um computador com o intuito de usar os recursos de modo eficaz. As estruturas de dados e os algoritmos são a base de todas as soluções para qualquer problema de programação. Com este livro, você aprenderá a escrever códigos complexos e eficazes usando os recursos mais recentes da ES 2017."
                        />
                    

                </View>

                <View style={styles.align}>
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/3.png')}
                        text="Harry Potter e o Prisioneiro de Azkaban"
                        autor="J. K. Rowling"
                        price="$60,00"
                        bio="Após ser acusado de ter entregue os Potter a Voldemort e matado treze trouxas e seu ex-amigo, Black é condenado a prisão perpétua, sendo aprisionado na prisão de Azkaban. Após treze anos, ele foge da prisão para, como todos acreditavam, matar Harry em nome de Voldemort."
                        />
                    

                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/4.png')}
                        text="A Sutil Arte de Ligar o F*da-Se"
                        autor="Mark Manson"
                        price="$40,00"
                        bio="Em A sutil arte de ligar o f*da-se, Mark Manson mostra que quanto mais nos importamos com todos os problemas da vida, maior o sofrimento. Então, aprenda identificar suas prioridades, ligue o f*da-se para o resto e aproveite uma vida melhor."
                        />

                </View>
                {/* Livros */}


                {/* Titulo */}
                <Text style={styles.titulo2}>Os Mais Vendidos</Text>
                {/* Titulo */}


                {/* Livros */}
                <View style={styles.align}>
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/5.png')}
                        text="O Pequeno Príncipe"
                        autor="Antoine de Saint-Exupéry"
                        price="$25,00"
                        bio="O pequeno príncipe é um clássico da literatura infantil que narra a amizade entre um menino e um piloto de avião. O principezinho vem do asteroide B 612, e encontra o piloto no deserto do Saara. A obra fala de amor, amizade e sobre a sabedoria infantil."
                        />
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/6.png')}
                        text="O labirinto do fauno"
                        autor=" Cornelia Funke e Guillermo del Toro"
                        price="$30,00"
                        bio="Um sapo monstruoso se acomodou nas raízes de uma figueira e não deixou a árvore se desenvolver. Em sua primeira tarefa para retornar ao Reino Subterrâneo, Ofélia precisaria colocar três pedras mágicas na boca do sapo e depois pegar a chave de ouro de dentro da barriga dele."
                        />
                </View>
                <View style={styles.align}>
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/7.png')}
                        text="O Senhor dos Anéis"
                        autor="J. R. R. Tolkien"
                        price="$100,00"
                        bio="Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel."
                        />
                    <BookButton
                        navigation={navegation}
                        imageSource={require('../../../assets/Livros/8.png')}
                        autor="J. K. Rowling"
                        text="Harry Potter e a Câmara Secreta" 
                        price="$60,00"
                        bio="Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático."
                        />
                </View>
                {/* Livros */}

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    menu: {
        userSelect: 'none',
        backgroundColor: '#F3C19D',
    },
    logo: {
        width: 250,
        height: 57,

    },
    notf: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    align: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 9,
        marginBottom: 1,
        marginLeft: 12,
    },
    titulo2: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 30,
        marginBottom: 1,
        marginLeft: 12,

    },

})