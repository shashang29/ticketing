import mongoose from 'mongoose';
import { Password } from '../services/password';
// to describe properties to create new user

interface UserAttr {
    email: string;
    password: string;
}

//interface that describes the properties thst a User model has

interface UserModel extends mongoose.Model<UserDoc> {
    build(attr: UserAttr): UserDoc;
}

//interface that describes properties that a User document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

}, {
    toJSON: {
        // so that there is consistency in all responses sent to client as well as only required info
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed)
    }
    done();
});

userSchema.statics.build = (attr: UserAttr) => {
    return new User(attr)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export { User };