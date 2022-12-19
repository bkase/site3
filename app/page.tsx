import Feed from '@/ui/Feed';
import { posts } from '@/lib/entries';

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="space-y-8 text-white">
        <Feed posts={posts} />
      </div>
    </div>
  );
}
