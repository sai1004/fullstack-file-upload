import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    filesInServer: any[] = [];
    isLoading: boolean = false;
    public uploadedFiles: Array<File> = [];
    url = this.bypassURL(this.filesInServer[0]);

    constructor(private _domSanitizer: DomSanitizer, private _http: HttpClient) {}

    ngOnInit() {}

    bypassURL(url: string) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

    public clear(): void {
        this.uploadedFiles = [];
    }

    handelFile() {
        this.uploadedFiles.forEach((file) => {
            console.log(file);
            const formData: FormData = new FormData();
            formData.append('file', file);
            this.uploadToServer(formData);
        });
    }

    uploadToServer(file: FormData) {
        this.isLoading = true;
        return this._http.post('http://localhost:5000/api/file/upload', file).subscribe((res) => {
            if (res) {
                console.log(res);
                let url = res['data'].url;
                this.filesInServer.push(url);
                console.log('url', url);
                this.clear();
                this.isLoading = false;
            }
        });
    }
}
