import { Component, OnInit } from '@angular/core';
import {produit} from '../produit';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editer-produit',
  templateUrl: './editer-produit.component.html',
  styleUrls: ['./editer-produit.component.css']
})
export class EditerProduitComponent implements OnInit {
  produit: produit;
  id:number;
  libelle:string;
  description:string;
  image:string="";
  prix:number;
  nbStock:number;
  stock:boolean;
  submitted:boolean=false;
  message:String;
  date: Date;
  constructor(private produitsservice:ProduitService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params["id"]);
    var id = this.route.snapshot.params["id"];
    this.produit = this.produitsservice.getProduitId(id);
  }
  
  editerProduit()
  {

    if(this.produitsservice.getProduitId(this.id)!=null)
    {
    this.produitsservice.editerProduitserv(this.id,this.libelle,this.description,this.image,this.prix,this.nbStock,this.stock,this.date);
    this.router.navigate(['/list-produit']);
    }
    else
    {
      this.message="L'Id entré n'existe pas !";
      this.submitted=true;
    }

  }
  versProduit()
  {
  this.router.navigate(['/list-produit']);
  }

}
