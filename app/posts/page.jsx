import { ListOfPosts } from "./[id]/ListOfPosts";

export default function Posts() {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  //   const posts = await fetchPosts();

  return (
    <section>
      <ListOfPosts />
    </section>
  );
}
