export function Home() {
    return <h2>Home</h2>;
  }
  
export function About(props) {
    
    return <h2>About to {props.love && props.love[0]+" "+props.love[1]}</h2>;
}

export function Users() {
    return <h2>Users</h2>;
}