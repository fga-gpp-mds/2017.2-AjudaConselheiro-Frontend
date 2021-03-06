import { Router } from '@angular/router';
import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CheckProdTopicHeaders, CheckProdCommentaries, CheckProdFirstTopic, CheckProdEighthTopic, CheckProdFifthTopic,
CheckProdFourthTopic, CheckProdSecondTopic, CheckProdSixthTopic, CheckProdSeventhTopic, CheckProdThirdTopic,
ChecklistProductionQuestionsIteratorArray, IteratorArray, SectionCommentary,
CommentBinaryForm, CommentForm, BinaryForm, ConfirmComentary, Post} from '../../models/index';
import { ChecklistService, AlertService, PostService } from '../../services/index';

@Component({
  selector: 'app-checklist-production',
  templateUrl: './checklist-production.component.html',
  styleUrls: ['./checklist-production.component.css'],
  providers: [ChecklistService, PostService, AlertService],
})
export class ChecklistProductionComponent implements OnInit {

    questionsProduction: Array<String[]>= ChecklistProductionQuestionsIteratorArray;
    iteratorArray: Array<Object>= IteratorArray;
    topicHeaders: Array<string> = CheckProdTopicHeaders;

  constructor(
    protected postService: PostService,
    protected alertService: AlertService,
    private router: Router,
  ) {}

  post: Post;
  loading = false;

  ngOnInit() {
    console.log('entrou!!');
    this.postService.getPosts();
  }

  onSubmit() {
      // Show questions and anwsers
      console.warn(this.iteratorArray);

      // Show commentaries for each section
  }

  savePost() {
      const jsonChecklistProduction = JSON.stringify({
        'iteratorArray': this.iteratorArray,
      });
      this.router.navigate(['/checklist']);

      this.postService.savePost(jsonChecklistProduction).subscribe(
        result => console.log(result)
      );
    }
}
