import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AdminService} from "../../../services/admin.service";
import {Article} from "../../../models/article";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Section} from "../../../models/section";
import {API_URL} from "../../../constants/API";
import {UserService} from "../../../services/user.service";
import {ArticleService} from "../../../services/article.service";
import {ArticleCreate} from "../../../models/articleCreate";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  articleId: number;
  article: Article;
  articleCreate: ArticleCreate = new ArticleCreate();
  sections: Section[] = [];
  sectionId: number;

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };
  inputForm: FormGroup;

  constructor(private usualRouter: Router, private router: ActivatedRoute, private adminService: AdminService, private fb: FormBuilder, private articleService: ArticleService, private userService: UserService,
              private http: HttpClient) {}

  ngOnInit() {
    this.sectionId = 2;
    this.getArticleId();
    this.adminService.editNews(this.articleId).subscribe( data => {
      this.article = new Article(data);
      this.articleCreate.sectionId = this.article.section.id;
      this.articleCreate.content = this.article.content;
      this.articleCreate.description = this.article.description;
      this.articleCreate.title = this.article.title;
      this.articleCreate.userId = this.article.user_id;
      console.log(this.articleCreate.sectionId)
    }, err => console.log(err));
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
    this.initForm();
    this.http.get(API_URL + '/getallsections').subscribe(
      (headings: Section[]) => {
        this.sections = headings;
        console.log(this.sections);
      }
    );
  }

  getArticleId(){
    this.router.params.subscribe(
      (params: Params) => {
        this.articleId = params['id'];
      }
    );
  }

  onSubmit() {
    console.log(this.sectionId);
    const controls = this.inputForm.controls;

    if (this.inputForm.invalid) {
      Object.keys(controls)
        .forEach(controlTitle => controls[controlTitle].markAsTouched());
      return;
    }
    this.articleCreate = this.inputForm.value;
    this.articleCreate.userId = this.userService.getCurrentUser().id;
    this.articleCreate.sectionId = 2;
    console.log(this.inputForm.value);
    this.articleService.createArticle(this.articleCreate).subscribe(err => {
      console.log(err);
    });
    this.userService.me(this.articleCreate.userId).subscribe(data => {
      this.userService.saveUserCred(data as User);
      console.log(data);
      this.usualRouter.navigate(["me/"+this.articleCreate.userId]);
    });
  }

  private initForm() {
    this.inputForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.maxLength(180)]],
      content: ['', [Validators.required, Validators.maxLength(4000)]],
      sectionId: ['']
    });
  }

  isControlInvalid(controlTitle: string): boolean {
    const control = this.inputForm.controls[controlTitle];

    const result = control.invalid && control.touched;

    return result;
  }
}
