import {Owner} from '../../shared/models/owner';
import {RetrievalComment} from './retrieval-comment';

export class RetrievalAnswer {
  private readonly id: string;
  private readonly content: string;
  private readonly questionId: string;
  private readonly owner: Owner;
  private readonly comments: Array<RetrievalComment>;
  private readonly createdDate: string;
  private readonly updatedDate: string;
}
