import React from 'react';

import { BookmarkType } from '@/types';
import Bookmark from '@/app/components/Bookmark';

type Props = {
    bookmarks: BookmarkType[]
}

const Bookmarks: React.FC<Props> = ({bookmarks}) => {
    return (
        <div>
            <h1>Welcome to Bookmarker</h1>
            {
                bookmarks.map(
                    bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />
                )
            }  
        </div>
    );
};

export default Bookmarks;