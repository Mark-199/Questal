"use client";

import { useState } from "react";
import { useSupabaseUser } from "@/utils/supabase/user";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";
import { NavBar } from "@/components/NavBar";
import {
  ThumbsUp,
  MessageCircle,
  UserPlus,
  Star,
  Send,
  PlusCircle,
} from "lucide-react";

export default function Feed() {
  const { user, loading } = useSupabaseUser();
  const [questText, setQuestText] = useState("");

  // Frictional posts with subscription flag
const [posts, setPosts] = useState([
  {
    id: 1,
    author: "Alice Johnson",
    content: "Just harvested my first batch of carrots!",
    likes: 5,
    comments: 2,
    subscribed: true,
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    author: "Bob Smith",
    content: "Anyone has tips for growing tomatoes indoors?",
    likes: 3,
    comments: 4,
    subscribed: false,
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    author: "Cathy Lee",
    content: "Excited for the community farm event this weekend!",
    likes: 8,
    comments: 1,
    subscribed: true,
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
]);


  const handlePostQuest = () => {
    if (!questText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: user?.user_metadata?.full_name || user?.email || "Anonymous",
      content: questText,
      likes: 0,
      comments: 0,
      subscribed: false,
    };

    setPosts([newPost, ...posts]);
    setQuestText("");
  };

  return (
    <>
      <LoadingOverlay active={loading} />
      <div className="flex flex-col md:flex-row min-h-screen">
        <NavBar />
        <main className="flex-1 min-h-screen p-6 md:p-12 bg-base-200">
          {/* Post Quest Section */}
          <div className="card bg-base-100 shadow-md mb-6">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-2">
                <PlusCircle className="w-6 h-6" />
                <span className="font-semibold ">Post a Quest</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full resize-none focus:outline-blue-500"
                rows={3}
                placeholder="What's your quest today?"
                value={questText}
                onChange={(e) => setQuestText(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={handlePostQuest}
                  className="btn btn-primary gap-2 text-white"
                >
                  <Send className="w-4 h-4" />
                  Post Quest
                </button>
              </div>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="card bg-base-100 shadow-md">
                <div className="card-body">
                  {/* Author Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Avatar Image */}
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                          <img src={post.avatarUrl} alt={post.author} />
                        </div>
                      </div>
                      {/* Author name + subscription star */}
                      <div className="flex items-center gap-1">
                        <p className="font-semibold">{post.author}</p>
                        {post.subscribed && <Star className="w-4 h-4 text-yellow-400" />}
                      </div>
                    </div>

                    {/* Follow button */}
                    <button className="btn btn-ghost btn-sm gap-1 text-blue-500">
                      <UserPlus className="w-4 h-4" /> Follow
                    </button>
                  </div>

                  {/* Post Content */}
                  <p className="my-2">{post.content}</p>

                  {/* Likes / Comments */}
                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <button className="btn btn-ghost btn-sm gap-1">
                      <ThumbsUp className="w-4 h-4" /> {post.likes}
                    </button>
                    <button className="btn btn-ghost btn-sm gap-1">
                      <MessageCircle className="w-4 h-4" /> {post.comments}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
