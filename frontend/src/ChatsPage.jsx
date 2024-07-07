import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'f4a6146d-ab7a-4827-aa8d-fa6ebb39f1b5',
         props.user.username, 
         props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} /> 
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage