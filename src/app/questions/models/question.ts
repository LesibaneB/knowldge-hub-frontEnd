import {Owner} from '../../shared/models/owner';
import {RetrievalAnswer} from './retrieval-answer';
import {RetrievalComment} from './retrieval-comment';

export class Question {
  public _id: string;
  public description: string;
  public content: string;
  public tags: Array<string>;
  public votes: number;
  public views: number;
  public answers: Array<RetrievalAnswer>;
  public comments: Array<RetrievalComment>;
  public owner: Owner;
  public createdDate: string;
  public updatedDate: string;
}
