import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = (Props) => {
    const renderDirecotryItem = ({ item: campsite}) => {
        return (
            <ListItem>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={Props.campsites}
            renderItem={renderDirecotryItem}
            KeyExtractor={(item) => item.id.toString()}
        />
    )
}

export default DirectoryScreen;