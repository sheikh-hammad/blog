import Hero from "./components/ui/Hero";
import BlogPost from "./components/ui/BlogPost";
import RecentPosts from "./components/ui/RecentPosts";
import NewRecentPosts from "./components/ui/NewRecentPosts";
import PopularPosts from "./components/ui/PopularPosts";

export default function Home() {
  return (
 <div>
  <Hero/>
  <BlogPost/>
  <RecentPosts/>
  <NewRecentPosts/>
  <PopularPosts/>
 </div>
  );
}
