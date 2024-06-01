import { Schema, Types, model, models } from "mongoose";

export interface iEvent extends Document {
    _id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    eventLocation?: string;
    description?: string;
    createdAt: Date;
    imgUrl: string;
    ticketPrice?: string;
    isFree?: boolean;
    capacity?: number;
    url?: string;
    activity: {_id: string, name: string};
    createdBy: {_id: string, username: string};
}

const EventSchema = new Schema({
    title: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    location: {type: Location},
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    imgUrl: {type: String, required: true},
    ticketPrice: {type: String},
    isFree: {type: Boolean, default: false},
    capacity: {type: Number},
    url:{type: String},
    activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
})

const Event = models.Event || model('Event', EventSchema);

export default EventSchema;