

const Link = ({router}) => {

    

    return (
            <li className='mr-12'>
                <a href={router.path}>{router.name}</a>
            </li>
    );
};

export default Link;