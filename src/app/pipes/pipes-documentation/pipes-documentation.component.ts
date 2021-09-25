import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pipes-documentation',
  templateUrl: './pipes-documentation.component.html',
  styleUrls: ['./pipes-documentation.component.scss']
})
export class PipesDocumentationComponent {
  faInfoCircle = faInfoCircle;
  textToTruncate = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod aut saepe voluptates eius laudantium minima aliquid eum earum nisi nam dolores corrupti quas harum rem, recusandae explicabo ex obcaecati quasi corporis illum dolorem neque nesciunt! Suscipit, tempore nobis eaque praesentium recusandae quo ipsum atque adipisci quos voluptatibus. Nam odio ducimus error obcaecati officiis repellat dolor, quam facilis ipsum sunt soluta, molestias quasi eum saepe nulla veritatis quas quaerat neque sapiente repudiandae consequatur veniam. Tempore hic qui eveniet inventore unde, iure cupiditate, sit ea quo deleniti cum, sed minus? Ad itaque vero natus possimus ipsam eos tempora velit nisi praesentium.'
  truncateCharacters = 100;
  flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  truncateTextChanged(event: Event): void {
    const target = event.target as HTMLInputElement;

    const value = target.value.trim() ? parseInt(target.value) : 0;
    this.truncateCharacters = value;
  }

  modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
