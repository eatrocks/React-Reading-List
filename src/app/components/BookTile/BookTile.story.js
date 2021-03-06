import { storiesOf, action } from '@kadira/storybook'
import BookTile from './BookTile.js'

storiesOf('BookTile', module)
    .add('default', () => (
        <BookTile
            id="tY4zrGsW_fUC"
            title="The Cat in the Hat"
            author="Dr. Seuss"
            read={true}
            coverImgUrl="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
            remove={action('consider me deleted')}
            toggleRead={action('consier me toggle read/unread')}
        />

    ))
    .add('unread', () => (
        <BookTile
            id="tY4zrGsW_fUC"
            title="The Cat in the Hat"
            author="Dr. Seuss"
            read={false}
            coverImgUrl="https://books.google.com/books/content?id=tY4zrGsW_fUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72N0vdX5lY_U8q_9o-__Pgtv_M7y1cwRcxIDhhHE--BK0ZCV1_PFKfzmTS7vWSmPzf5SSQyjcr5p4Ydi-m40YU4Oy3t9f1VD2DTiyzU9M_TKvg2jYRrJ_Pf0PdzGDVxHrNHaV4o&source=gbs_api"
            remove={action('consider me deleted')}
            toggleRead={action('consier me toggle read/unread')}
        />

    ))
