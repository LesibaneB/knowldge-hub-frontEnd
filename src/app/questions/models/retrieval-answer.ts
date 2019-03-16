import {Owner} from '../../shared/models/owner';
import {RetrievalComment} from './retrieval-comment';

export class RetrievalAnswer {
  private id: string;
  private content: string;
  private questionId: string;
  private owner: Owner;
  private comments: Array<RetrievalComment>;
  private createdDate: string;
  private updatedDate: string;
}
