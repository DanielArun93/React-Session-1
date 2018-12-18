class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        return(
            <div>
                Hello {props}
            </div>
        )
    }
}