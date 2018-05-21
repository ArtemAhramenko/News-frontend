import {Component, NgModule, OnInit} from '@angular/core';
import {Article} from '../../../models/article';
import {API_URL} from '../../../constants/API';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {V} from '@angular/core/src/render3';
import {ArticleCreate} from '../../../models/articleCreate';
import {ArticleService} from '../../../services/article.service';

@Component({
  selector: 'app-check',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})

export class CreateArticleComponent implements OnInit {
  articleCreate: ArticleCreate = new ArticleCreate();
  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };
  inputForm: FormGroup;
  constructor(private fb: FormBuilder, private articleService: ArticleService) {

  }


  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
    this.initForm();
  }
  onSubmit() {
    const controls = this.inputForm.controls;

    if (this.inputForm.invalid) {
      Object.keys(controls)
        .forEach(controlTitle => controls[controlTitle].markAsTouched());
      return;
    }
    this.articleCreate = this.inputForm.value;
    this.articleService.createArticle(this.articleCreate).subscribe(err=>{
      console.log(err);
    })

    console.log(this.inputForm.value);
  }
  private initForm(){
    this.inputForm = this.fb.group({
      title: ['',[Validators.required, Validators.maxLength(15)]],
      description: ['',[Validators.required, Validators.maxLength(15)]],
      content: ['',[Validators.required, Validators.maxLength(150)]]
    });
  }

  isControlInvalid(controlTitle: string): boolean {
    const control = this.inputForm.controls[controlTitle];

    const result = control.invalid && control.touched;

    return result;
  }
}