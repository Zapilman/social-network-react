import profileReducer, {addPost, setProfile} from "./profileReducer";


it('new post should be added',()=>{

    // 1. test data
    const action = addPost('test')
    const state = {
        posts: [
            {message: 'asd', likeCount: '13'},
            {message: 'It\'s my second post', likeCount: '24'}
        ],
    };

    // 2.action
    let newState = profileReducer(state, action);

    // 3. expectation

    expect(newState.posts.length).toBe(3);


});

it('profile should be added',()=>{
    const action = setProfile({
        fullName: 'Peter',
        userId: 123
    });

    const state = {
        profile: {
            fullName: null,
            userId: null,
            status: ''
        }
    }

    let newState = profileReducer(state, action);

    expect(newState.profile.fullName).toBe('Peter');
})