import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  
  <main class="main">
  <div class="container">
    <h1>Mini cursos</h1>
    <div class="card mb-3">
  <img src="../assets/fora.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
</div>
   </div>
  </main>
  <router-outlet>

`,

  styles:`
 
    
  `
})
export class AppComponent {
  title = 'MiniCursos';
}
