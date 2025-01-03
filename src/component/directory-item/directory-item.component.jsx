import { useNavigate } from 'react-router-dom';

import { BackgroundImage, DirectoryItemContainer, Body } from './directory-item.style';

const DirectoryItem = ({category}) => {

  const { title, imageUrl, route } = category;
  
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)

    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage className="background-image"
          imageUrl={ imageUrl }/>
          <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
          </Body>
        </DirectoryItemContainer>
    )

}

export default DirectoryItem;