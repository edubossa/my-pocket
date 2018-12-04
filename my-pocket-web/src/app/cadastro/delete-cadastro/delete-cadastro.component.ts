import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-delete-cadastro',
  templateUrl: './delete-cadastro.component.html'
})
export class DeleteCadastroComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: CadastroService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!confirm('Confirma a remoção da categoria - ' + id)) {
      this.router.navigate(['/cadastro']);
      return;
    }
    this.service.delete(id).subscribe(data => {
      console.log(data);
    }, (error: any) => {
      console.log(JSON.stringify(error));
    }, () => {
      this.router.navigate(['/cadastro']);
    });

  }

}
