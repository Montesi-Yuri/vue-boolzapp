/* 
    JS
*/

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ],
            activeChat: {
                id: 0,
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },
            inputMessage: '',
            searchContact: '',
            searchResult: '',
            lastMessage: '',
            activeChatLenght: '0',
            dropdownToggle: 'd-none',
            contactLastMessage:'',
        }
    },
    methods:{
        showChat(index){
            console.log('indice contatto', index)
            this.activeChat.id = index;
            this.activeChat.name = this.contacts[index].name;
            this.activeChat.avatar = this.contacts[index].avatar;
            this.activeChat.messages = this.contacts[index].messages;
        },
        newMessage(){
            this.contacts[this.activeChat.id].messages.push({
                date: 'ora',
                message: this.inputMessage,
                status: 'sent'
            }),
            this.inputMessage = '';
            setTimeout(()=>{
                this.contacts[this.activeChat.id].messages.push({
                    date: 'ora',
                    message: 'ok',
                    status: 'received'
                });
            }, 1000);
        },
        contactsFilter(){
            if(this.searchContact.trim() == ''){
                for (let i = 0; i < this.contacts.length; i++) {
                    const contact = this.contacts[i];
                    contact.visible = true;
                }
            }
            else{
                for (let i = 0; i < this.contacts.length; i++) {
                    let contact = this.contacts[i];
                    if(!contact.name.toLowerCase().includes(this.searchContact)){
                        contact.visible = false;
                    }
                }
            }
        },
        lastAccessFunct(){
            this.activeChatLenght = this.activeChat.messages.length;
            this.activeChatLenght = this.activeChatLenght - 1;
            this.lastMessage = this.activeChat.messages[this.activeChatLenght];
            console.log('last Message', this.lastMessage)
        },
        dropdownMessageOn(toggleI){
            console.log(toggleI, 'i')
            console.log(this.activeChat.messages[toggleI].messageId, 'msg-i')
            if (toggleI == this.activeChat.messages[toggleI].messageId) {
                this.dropdownToggle = 'd-inline-block';
            }
        },
        dropdownMessageOff(i){
            
            this.dropdownToggle = 'd-none';
            console.log(this.activeChat.messages[i].status)
            if(this.activeChat.messages[i].status.trim().includes('sent')){
                this.activeChat.messages[i].status = 'sent';
            }
            else{
                this.activeChat.messages[i].status = 'received';
            }
        },
    },
    mounted(){
        for (let i = 0; i < this.activeChat.messages.length; i++) {
            let message = this.activeChat.messages[i];
            message = {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                messageId: i
                }
        }
    }
})
app.mount('#app');