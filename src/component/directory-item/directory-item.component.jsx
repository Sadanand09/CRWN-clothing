import './directory-item.style';

const DirectoryItem = ({category}) => {

    const {title, imageUrl} = category;

    return(
        <div className="directory-item-container">
        <div className="background-image"
          imageUrl={ imageUrl }/>
          <div className="directory-item-body">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
    )

}

export default DirectoryItem;